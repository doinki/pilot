import type { Meta, StoryObj } from '@storybook/react';

import TvOffOutlined from '../../lib/notification/TvOffOutlined';

const meta: Meta<typeof TvOffOutlined> = {
  component: TvOffOutlined,
  tags: ['autodocs'],
  title: 'notification/TvOffOutlined',
};

export default meta;
type Story = StoryObj<typeof TvOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
