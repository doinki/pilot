import type { Meta, StoryObj } from '@storybook/react';

import GetAppOutlined from '../../lib/action/GetAppOutlined';

const meta: Meta<typeof GetAppOutlined> = {
  component: GetAppOutlined,
  tags: ['autodocs'],
  title: 'action/GetAppOutlined',
};

export default meta;
type Story = StoryObj<typeof GetAppOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
