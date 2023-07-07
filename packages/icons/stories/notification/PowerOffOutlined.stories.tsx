import type { Meta, StoryObj } from '@storybook/react';

import PowerOffOutlined from '../../lib/notification/PowerOffOutlined';

const meta: Meta<typeof PowerOffOutlined> = {
  component: PowerOffOutlined,
  tags: ['autodocs'],
  title: 'notification/PowerOffOutlined',
};

export default meta;
type Story = StoryObj<typeof PowerOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
