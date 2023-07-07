import type { Meta, StoryObj } from '@storybook/react';

import WcOutlined from '../../lib/notification/WcOutlined';

const meta: Meta<typeof WcOutlined> = {
  component: WcOutlined,
  tags: ['autodocs'],
  title: 'notification/WcOutlined',
};

export default meta;
type Story = StoryObj<typeof WcOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
