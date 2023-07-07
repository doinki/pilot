import type { Meta, StoryObj } from '@storybook/react';

import DiscFullOutlined from '../../lib/notification/DiscFullOutlined';

const meta: Meta<typeof DiscFullOutlined> = {
  component: DiscFullOutlined,
  tags: ['autodocs'],
  title: 'notification/DiscFullOutlined',
};

export default meta;
type Story = StoryObj<typeof DiscFullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
