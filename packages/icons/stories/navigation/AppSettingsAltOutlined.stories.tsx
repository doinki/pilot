import type { Meta, StoryObj } from '@storybook/react';

import AppSettingsAltOutlined from '../../lib/navigation/AppSettingsAltOutlined';

const meta: Meta<typeof AppSettingsAltOutlined> = {
  component: AppSettingsAltOutlined,
  tags: ['autodocs'],
  title: 'navigation/AppSettingsAltOutlined',
};

export default meta;
type Story = StoryObj<typeof AppSettingsAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
