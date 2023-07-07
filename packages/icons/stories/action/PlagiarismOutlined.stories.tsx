import type { Meta, StoryObj } from '@storybook/react';

import PlagiarismOutlined from '../../lib/action/PlagiarismOutlined';

const meta: Meta<typeof PlagiarismOutlined> = {
  component: PlagiarismOutlined,
  tags: ['autodocs'],
  title: 'action/PlagiarismOutlined',
};

export default meta;
type Story = StoryObj<typeof PlagiarismOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
