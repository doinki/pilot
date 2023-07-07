import type { Meta, StoryObj } from '@storybook/react';

import ChromeReaderModeOutlined from '../../lib/action/ChromeReaderModeOutlined';

const meta: Meta<typeof ChromeReaderModeOutlined> = {
  component: ChromeReaderModeOutlined,
  tags: ['autodocs'],
  title: 'action/ChromeReaderModeOutlined',
};

export default meta;
type Story = StoryObj<typeof ChromeReaderModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
