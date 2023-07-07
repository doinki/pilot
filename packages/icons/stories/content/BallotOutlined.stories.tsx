import type { Meta, StoryObj } from '@storybook/react';

import BallotOutlined from '../../lib/content/BallotOutlined';

const meta: Meta<typeof BallotOutlined> = {
  component: BallotOutlined,
  tags: ['autodocs'],
  title: 'content/BallotOutlined',
};

export default meta;
type Story = StoryObj<typeof BallotOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
