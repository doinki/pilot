import type { Meta, StoryObj } from '@storybook/react';

import OfflinePinOutlined from '../../lib/action/OfflinePinOutlined';

const meta: Meta<typeof OfflinePinOutlined> = {
  component: OfflinePinOutlined,
  tags: ['autodocs'],
  title: 'action/OfflinePinOutlined',
};

export default meta;
type Story = StoryObj<typeof OfflinePinOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
