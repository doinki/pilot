import type { Meta, StoryObj } from '@storybook/react';

import AppRegistrationOutlined from '../../lib/communication/AppRegistrationOutlined';

const meta: Meta<typeof AppRegistrationOutlined> = {
  component: AppRegistrationOutlined,
  tags: ['autodocs'],
  title: 'communication/AppRegistrationOutlined',
};

export default meta;
type Story = StoryObj<typeof AppRegistrationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
