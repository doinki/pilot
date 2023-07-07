import type { Meta, StoryObj } from '@storybook/react';

import MoreOutlined from '../../lib/notification/MoreOutlined';

const meta: Meta<typeof MoreOutlined> = {
  component: MoreOutlined,
  tags: ['autodocs'],
  title: 'notification/MoreOutlined',
};

export default meta;
type Story = StoryObj<typeof MoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
