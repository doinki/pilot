import type { Meta, StoryObj } from '@storybook/react';

import ThunderstormOutlined from '../../lib/social/ThunderstormOutlined';

const meta: Meta<typeof ThunderstormOutlined> = {
  component: ThunderstormOutlined,
  tags: ['autodocs'],
  title: 'social/ThunderstormOutlined',
};

export default meta;
type Story = StoryObj<typeof ThunderstormOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
