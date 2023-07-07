import type { Meta, StoryObj } from '@storybook/react';

import SdCardAlertOutlined from '../../lib/notification/SdCardAlertOutlined';

const meta: Meta<typeof SdCardAlertOutlined> = {
  component: SdCardAlertOutlined,
  tags: ['autodocs'],
  title: 'notification/SdCardAlertOutlined',
};

export default meta;
type Story = StoryObj<typeof SdCardAlertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
