import type { Meta, StoryObj } from '@storybook/react';

import ConfirmationNumberOutlined from '../../lib/notification/ConfirmationNumberOutlined';

const meta: Meta<typeof ConfirmationNumberOutlined> = {
  component: ConfirmationNumberOutlined,
  tags: ['autodocs'],
  title: 'notification/ConfirmationNumberOutlined',
};

export default meta;
type Story = StoryObj<typeof ConfirmationNumberOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
