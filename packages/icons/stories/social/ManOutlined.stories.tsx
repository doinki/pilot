import type { Meta, StoryObj } from '@storybook/react';

import ManOutlined from '../../lib/social/ManOutlined';

const meta: Meta<typeof ManOutlined> = {
  component: ManOutlined,
  tags: ['autodocs'],
  title: 'social/ManOutlined',
};

export default meta;
type Story = StoryObj<typeof ManOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
