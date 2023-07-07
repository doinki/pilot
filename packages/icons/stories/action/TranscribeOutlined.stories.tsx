import type { Meta, StoryObj } from '@storybook/react';

import TranscribeOutlined from '../../lib/action/TranscribeOutlined';

const meta: Meta<typeof TranscribeOutlined> = {
  component: TranscribeOutlined,
  tags: ['autodocs'],
  title: 'action/TranscribeOutlined',
};

export default meta;
type Story = StoryObj<typeof TranscribeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
