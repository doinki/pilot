import type { Meta, StoryObj } from '@storybook/react';

import ClearOutlined from '../../lib/content/ClearOutlined';

const meta: Meta<typeof ClearOutlined> = {
  component: ClearOutlined,
  tags: ['autodocs'],
  title: 'content/ClearOutlined',
};

export default meta;
type Story = StoryObj<typeof ClearOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
