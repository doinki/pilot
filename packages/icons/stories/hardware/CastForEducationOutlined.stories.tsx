import type { Meta, StoryObj } from '@storybook/react';

import CastForEducationOutlined from '../../lib/hardware/CastForEducationOutlined';

const meta: Meta<typeof CastForEducationOutlined> = {
  component: CastForEducationOutlined,
  tags: ['autodocs'],
  title: 'hardware/CastForEducationOutlined',
};

export default meta;
type Story = StoryObj<typeof CastForEducationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
