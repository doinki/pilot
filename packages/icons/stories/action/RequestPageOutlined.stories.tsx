import type { Meta, StoryObj } from '@storybook/react';

import RequestPageOutlined from '../../lib/action/RequestPageOutlined';

const meta: Meta<typeof RequestPageOutlined> = {
  component: RequestPageOutlined,
  tags: ['autodocs'],
  title: 'action/RequestPageOutlined',
};

export default meta;
type Story = StoryObj<typeof RequestPageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
