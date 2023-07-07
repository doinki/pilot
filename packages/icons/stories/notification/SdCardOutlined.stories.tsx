import type { Meta, StoryObj } from '@storybook/react';

import SdCardOutlined from '../../lib/notification/SdCardOutlined';

const meta: Meta<typeof SdCardOutlined> = {
  component: SdCardOutlined,
  tags: ['autodocs'],
  title: 'notification/SdCardOutlined',
};

export default meta;
type Story = StoryObj<typeof SdCardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
