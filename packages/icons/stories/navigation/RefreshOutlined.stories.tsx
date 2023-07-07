import type { Meta, StoryObj } from '@storybook/react';

import RefreshOutlined from '../../lib/navigation/RefreshOutlined';

const meta: Meta<typeof RefreshOutlined> = {
  component: RefreshOutlined,
  tags: ['autodocs'],
  title: 'navigation/RefreshOutlined',
};

export default meta;
type Story = StoryObj<typeof RefreshOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
